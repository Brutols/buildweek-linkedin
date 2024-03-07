import { FormControl } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./addExperience.module.css";
import CustomButton from "../button/Button";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { isShow, setShow } from "../../Slices/experiencesSlice";
import ButtonIcon from "../buttonIcon/ButtonIcon";

function AddExperience() {
  const show = useSelector(isShow);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(setShow());
  const handleShow = () => dispatch(setShow());

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
          <Form>
            <FormControl
              className={styles.myInput}
              type="text"
              placeholder="role"
            />
            <FormControl
              className={styles.myInput}
              type="text"
              placeholder="company"
            />
            <FormControl className={styles.myInput} type="date" />
            <FormControl className={styles.myInput} type="date" />
            <FormControl
              className={styles.myInput}
              type="text"
              placeholder="description"
            />
            <Form.Select
              aria-label="Default select example"
              className={styles.myInput}
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
