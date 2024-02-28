import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import AccordionList from "./components/AccordionList.jsx";
import SearchbarAlumni from "./components/SearchbarAlumni.jsx";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getAlumni,
  searchAlumni,
  addBatchID,
  deleteBatchID,
  deleteAlumni,
  showConfirmationDeleteAlumni,
  notifySuccessDelete,
  showErrorDeleteAlumni,
} from './components/appComponentFunction/AlumniOperations.js';

//import "./components/sweetalert2/dist/sweetalert2.css";

function App() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [alumni, setAlumni] = useState([]);
  const [originalAlumni, setOriginalAlumni] = useState([]);
  const [batchID, setBatchID] = useState([]);
  const [mergedName, setMergedName] = useState("");

  const handleGetAlumni = () => {
    getAlumni(setAlumni, setOriginalAlumni);
  };

  const handleSearch = (search) => {
    searchAlumni(alumni, originalAlumni, setAlumni, search);
  };

  const handleAddBatchID = (newID) => {
    addBatchID(batchID, setBatchID, newID);
  };

  const handleDeleteBatchID = (idToDelete) => {
    deleteBatchID(idToDelete, setBatchID, batchID);
  }

  const handleDeleteAlumni = () => {
    deleteAlumni(batchID, setBatchID, handleGetAlumni, notifySuccessDelete);
  };

  const handleShowConfirmationDeleteAlumni = () => {
    showConfirmationDeleteAlumni(Swal, handleDeleteAlumni);
  };

  const handleShowErrorDeleteAlumni = () => {
    showErrorDeleteAlumni(Swal);
  };

  return (
    <>
      <ToastContainer />
      <NavigationBar />
      <SearchbarAlumni
        getAlumni={handleGetAlumni}
        getSearchValue={handleSearch}
        deleteAlumni={
          batchID.length === 0
            ? handleShowErrorDeleteAlumni
            : handleShowConfirmationDeleteAlumni
        }
      />
      <AccordionList
        data={alumni}
        getAlumni={handleGetAlumni}
        addBatchID={handleAddBatchID}
        deleteBatchID={handleDeleteBatchID}
      />
      <Footer />
    </>
  );
}

export default App;
