import { FormControl } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./addExperience.module.css";
import CustomButton from "../button/Button";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  allFormData,
  isShow,
  postExperience,
  resetFormData,
  setFormData,
  setShow,
} from "../../Slices/experiencesSlice";
import ButtonIcon from "../buttonIcon/ButtonIcon";

function AddExperience({id}) {
  const show = useSelector(isShow);
  const formData = useSelector(allFormData);
  const dispatch = useDispatch();

  const experiencesUrl = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`;

  const handleClose = () => dispatch(setShow());
  const handleShow = () => dispatch(setShow());

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    dispatch(setFormData({ name: name, value: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    dispatch(postExperience({url: experiencesUrl, data: formData}))
    dispatch(resetFormData())
  }

  return (
    <>
      <a href="!#" onClick={handleShow} className={styles.btns}>
        <ButtonIcon iconName="FaPlus" />
      </a>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Experience</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form className="d-flex flex-column gap-2" onSubmit={handleSubmit}>
            <FormControl
              className={styles.myInput}
              type="text"
              placeholder="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            />
            <FormControl
              className={styles.myInput}
              type="text"
              placeholder="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
            <FormControl
              className={styles.myInput}
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />
            <FormControl
              className={styles.myInput}
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
            />
            <FormControl
              className={styles.myInput}
              type="text"
              placeholder="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
            <Form.Select
              aria-label="Default select example"
              name="area"
              value={formData.area}
              className={styles.myInput}
              onChange={handleChange}
            >
              <option>Work / Education</option>
              <option value="work">Work</option>
              <option value="education">Education</option>
            </Form.Select>
            <CustomButton variant="filledBlue" text="Submit" type="submit" />
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AddExperience;
