from flask import request, jsonify
from config import app, db
from models import JobOffer


# GET method
@app.route("/job-offers", methods=["GET"])
# get all offers from the database
def get_joboffers():
    """
    Handles the route for retrieving all job offers from the database.

    :return: A JSON object containing a list of all job offers.
    """
    job_offers = JobOffer.query.all()
    # from the python object, return JSON
    json_job_offers = list(map(lambda x: x.to_json(), job_offers))
    return jsonify({"job_offers": json_job_offers})


# POST method
@app.route("/create-job-offer", methods=["POST"])
def create_offer():
    """
    Route to create a new job offer. The job offer details including title, company, location, salary, description, and hiring manager
    must be provided in the request body as JSON. Title is required.

    Field Validation:
      - title: Non-nullable string

    If the title is not provided, an error message will be returned with status code 400.

    Database Operations:
      - Attempts to insert a new job offer into the database.
      - Commits the transaction if successful.
      - Returns an error message if there is an exception during database operations.

    :return: JSON response with a message indicating the result of the operation.
      - Success: message "Job offer created" with status code 201
      - Failure: appropriate error message with status code 400
    """
    title = request.json.get("title")
    company = request.json.get("company")
    location = request.json.get("location")
    salary = request.json.get("salary")
    description = request.json.get("description")
    hiring_manager = request.json.get("hiringManager")

    # Check if the title (for now the only non-nullable field) is not empty
    # If it is, return an error that specifies it
    if not title:
        return (
            jsonify({"message": "Title is required"}),
            400
        )
    # create an instance of the class with the properties from the request
    new_job_offer = JobOffer(title=title, company=company, location=location, salary=salary,
                             description=description, hiring_manager=hiring_manager)

    # try to add the class to the database
    try:
        db.session.add(new_job_offer)
        db.session.commit()  # write to the database
    # if there is an exception, return the message
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "Job offer created"}), 201


# UPDATE method
@app.route("/update-job-offer/<int:job_offer_id>", methods=["PATCH"])
# specify the offer id (primary key)
def update_job_offer(job_offer_id):
    """
    :param job_offer_id: The ID of the job offer to update.
    :return: A JSON response indicating the outcome of the update operation, along with the appropriate HTTP status code.
    """
    job_offer = JobOffer.query.get(job_offer_id)

    # error if not found
    if not job_offer:
        return jsonify({"message": "Job offer not found"}), 404

    # change the data, leave as-is if not changed
    data = request.json
    job_offer.title = data.get("title", job_offer.title)
    job_offer.company = data.get("company", job_offer.company)
    job_offer.location = data.get("location", job_offer.location)
    job_offer.salary = data.get("salary", job_offer.salary)
    job_offer.description = data.get("description", job_offer.description)
    job_offer.hiring_manager = data.get("hiringManager", job_offer.hiring_manager)

    db.session.commit()

    return jsonify({"message": "Job offer updated"}), 200


# DELETE method
@app.route("/delete-job-offer/<int:job_offer_id>", methods=["DELETE"])
# specific to one job offer id
def delete_job_offer(job_offer_id):
    """
    :param job_offer_id: The ID of the job offer to be deleted.
    :return: A JSON response with a message indicating the result of the delete operation and the corresponding HTTP status code.
    """
    job_offer = JobOffer.query.get(job_offer_id)

    # throw error if not found
    if not job_offer:
        return jsonify({"message": "Job offer not found"}), 404

    # delete otherwise
    db.session.delete(job_offer)
    db.session.commit()

    # inform the user
    return jsonify({"message": "Job offer deleted"}), 200


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    """
    When showing a demo, and you want to host within network, uncomment the following line:
    
    app.run(debug=True, host="0.0.0.0", port=8000, use_reloader=False, threaded=True)
    
    After this, change the config in the frontend folder, the file vite.config.js.
    Paste in the second address
    """
    #app.run(debug=True, host="0.0.0.0", port=8000, use_reloader=False, threaded=True)

    app.run(debug=True)

