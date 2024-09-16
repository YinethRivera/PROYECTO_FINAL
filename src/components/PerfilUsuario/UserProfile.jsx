import { useContext, useEffect, useState } from "react";
import "./userProfile.css";
import { AuthContext } from "../../context/Auth/AuthContext";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  const [userData, setUserData] = useState({
    nombreCompleto: "",
    correoElectronico: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [newData, setNewData] = useState({
    nombreCompleto: "",
    correoElectronico: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const response = await fetch(`/api/usuarios/${user.uid}`);
          if (response.ok) {
            const data = await response.json();
            setUserData(data);
            setNewData(data);
          } else {
            console.log("Error fetching user data");
          }
        } catch (error) {
          console.log("Error:", error);
        }
      } else {
        console.log("No hay usuario autenticado");
      }
    };

    fetchUserData();
  }, [user]);

  const updateUserData = async (userId, userData) => {
    try {
      const response = await fetch(`/api/usuarios/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        const updatedData = await response.json();

        console.log(updatedData);
      } else {
        console.log("Error updating user data");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const response = await fetch(`/api/usuarios/${userId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const result = await response.json();
        console.log(result);
      } else {
        console.log("Error deleting user");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/usuarios/${user.uid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });
      if (response.ok) {
        setUserData(newData);
        setEditMode(false);
      } else {
        console.log("Error updating user data");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="profile-container">
      <h2>Perfil del Usuario</h2>
      {editMode ? (
        <form onSubmit={handleUpdate}>
          <div className="input-group">
            <label htmlFor="nombreCompleto">Nombre Completo</label>
            <input
              type="text"
              id="nombreCompleto"
              name="nombreCompleto"
              value={newData.nombreCompleto}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="correoElectronico">Correo Electrónico</label>
            <input
              type="email"
              id="correoElectronico"
              name="correoElectronico"
              value={newData.correoElectronico}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Actualizar
          </button>
          <button
            type="button"
            onClick={() => setEditMode(false)}
            className="cancel-button"
          >
            Cancelar
          </button>
        </form>
      ) : (
        <div className="profile-info">
          <p>
            <strong>Nombre Completo:</strong> {userData.nombreCompleto}
          </p>
          <p>
            <strong>Correo Electrónico:</strong> {user.email}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
