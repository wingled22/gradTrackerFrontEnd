import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getAlumni = async (setAlumni, setOriginalAlumni) => {
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

  const searchAlumni = (alums, originalAlumni, setAlumni, search) => {
    setAlumni(originalAlumni);
    setAlumni((alumniList) => {
      return alumniList.filter((alumnus) => {
        const mergedName = (
          alumnus.firstName +
          " " +
          alumnus.lastName
        ).toLowerCase();
        return mergedName.includes(search.toLowerCase());
      });
    });
  };

  //This is for the check and unchecking of checbox
  // Function to add a batch ID
  const addBatchID = (batchID, setBatchID, newID) => {
    setBatchID([...batchID, newID]);
  };

  // Function to delete a specific ID
  const deleteBatchID = (idToDelete, setBatchID, batchID) => {
    const updatedBatchIDs = batchID.filter((id) => id !== idToDelete);
    setBatchID(updatedBatchIDs);
  };

  const deleteAlumni = async (batchID, setBatchID, getAlumni, notifySuccessDelete) => {
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
  
      setBatchID([]); // Clear the compiled batch IDs
      getAlumni();
      notifySuccessDelete();
    } catch (error) {
      console.log(error);
    }
  };

  const showConfirmationDeleteAlumni = (Swal, deleteAlumni) => {
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
        // Call the deletion
        deleteAlumni();
      }
    });
  };

  const notifySuccessDelete = () => {
    toast.success("Successfully deleted");
  };
  
  const showErrorDeleteAlumni = (Swal) => {
    Swal.fire({
      icon: "error",
      title: "T^T",
      text: "Select an alumnus to delete first.",
    });
  };

  export {
    getAlumni,
    searchAlumni,
    addBatchID,
    deleteBatchID,
    deleteAlumni,
    showConfirmationDeleteAlumni,
    notifySuccessDelete,
    showErrorDeleteAlumni,
  };
  