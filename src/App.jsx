import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import AccordionList from "./components/AccordionList.jsx";
import Searchc from "./components/Search-create.jsx";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [alumni, setAlumni] = useState([]);
  const [originalAlumni, setOriginalAlumni] = useState([]);
  const [batchID, setBatchID] = useState([]);
  const [mergedName, setMergedName] = useState("");

  const searchAlumni = (search) => {
    setAlumni(originalAlumni);
    setAlumni((alums) => {
      return alums.filter((alumnus) => {
        const mergedName = (
          alumnus.firstName +
          " " +
          alumnus.lastName
        ).toLowerCase();
        return mergedName.includes(search.toLowerCase());
      });
    });

    console.log(alumni);
  };

  const getAlumni = async () => {
    try {
      const response = await fetch("http://localhost:5134/api/Alumni");
      const data = await response.json();
      setAlumni(data);
      setOriginalAlumni(data);

      console.log(data);
    } catch (error) {
      toast.error(error);
    }
  };

  //This is for the check and unchecking of checbox
  // Function to add a batch ID
  const addBatchID = (newID) => {
    setBatchID([...batchID, newID]);

    console.log(batchID);
  };

  // Function to delete a specific ID
  const deleteBatchID = (idToDelete) => {
    const updatedBatchIDs = batchID.filter((id) => id !== idToDelete);
    setBatchID(updatedBatchIDs);

    console.log(batchID);
  };

  const deleteAlumni = async () => {
    try {
      const deleteRequests = batchID.map(async (id) => {
        const response = await fetch(`http://localhost:5134/api/Alumni/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          // Handle error if needed
          console.error(`Failed to delete alumnus with ID ${id}`);
        }
      });

      // Wait for all delete requests to complete
      await Promise.all(deleteRequests);

      setBatchID([]); //clear the compiled batch IDs
      getAlumni();
      notifySuccessDelete();
    } catch (error) {
      console.log(error);
    }
  };

  const showConfirmationDeleteAlumni = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //call the deletion
        deleteAlumni();
      }
    });
  };

  const notifySuccessDelete = () => toast.success("Successfully deleted");

  const showErrorDeleteAlumni = () => {
    Swal.fire({
      icon: "error",
      title: "T^T",
      text: "Select an alumnus to delete first.",
    });
  };

  return (
    <>
      <ToastContainer />
      <NavigationBar />
      <Searchc getAlumni={getAlumni} getSearchValue={searchAlumni} />
      <AccordionList data={alumni} getAlumni={getAlumni} />
      <Footer />
    </>
  );
}

export default App;
