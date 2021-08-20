import React, { useState } from "react";
import { Modal, Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postJObsAction } from "../../redux/PostJobs/action";
import "../../Styles/Containners/Company/PostJob.css";
import { useSelector } from "react-redux";

function PostJob({ show, handleClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [experience, setExperience] = useState();
  const [last_date, setLast_date] = useState("");
  const [category, setCategory] = useState("");
  const [minimum_salary, setSalary] = useState();

  const auth = useSelector((state) => state.user);
  const company_id = auth.user._id;

  const dispatch = useDispatch();

  const postJOB = (e) => {
    e.preventDefault();
    const post = {
      title,
      description,
      experience,
      last_date,
      category,
      minimum_salary,
      company_id,
    };
    dispatch(postJObsAction(post));
  };

  return (
    <div className="ModalMain">
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Vacancy</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form.Group>
                <Form.Label className="labels" htmlFor="title">
                  Job Title
                </Form.Label>
                <Form.Control
                  id="title"
                  type="text"
                  placeholder="Job Title here"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  autoFocus
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Job Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="labels" htmlFor="Experience">
                  Experience Required
                </Form.Label>
                <Form.Control
                  id=""
                  type="text"
                  placeholder="Experience Required"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="labels" htmlFor="salary">
                  Minimum Salary
                </Form.Label>
                <Form.Control
                  id="salary"
                  type="number"
                  placeholder="Minimum Salary"
                  value={minimum_salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="labels" htmlFor="category">
                  Category
                </Form.Label>
                <Form.Control
                  id=""
                  type="text"
                  placeholder="Category is required"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  autoFocus
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="labels" htmlFor="lastDateToApply">
                  Last Date to Apply
                </Form.Label>
                <Form.Control
                  id="lastDateToApply"
                  type="date"
                  value={last_date}
                  onChange={(e) => setLast_date(e.target.value)}
                />
              </Form.Group>
            </Container>
          </Modal.Body>
          <Modal.Footer onClick={handleClose}>
            <Button variant="secondary" onClick={postJOB}>
              Post
            </Button>
            <Button variant="primary">Cancel</Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default PostJob;
