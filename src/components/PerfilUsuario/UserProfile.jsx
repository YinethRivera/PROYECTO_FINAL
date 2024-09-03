import { useEffect, useState } from "react";
import { auth } from "../../firebase/credenciales";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import "./userProfile.css";
import { db } from "/src/firebase/credenciales.js";

const UserProfile = () => {
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
      const user = auth.currentUser;
      if (user) {
        console.log("Usuario autenticado:", user);
        const docRef = doc(db, "usuarios", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Datos del documento:", docSnap.data());
          setUserData(docSnap.data());
          setNewData(docSnap.data());
        } else {
          console.log("No se encontró el documento");
        }
      } else {
        console.log("No hay usuario autenticado");
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(db, "usuarios", user.uid);
      await updateDoc(docRef, newData);
      setUserData(newData);
      setEditMode(false);
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
            <strong>Correo Electrónico:</strong> {userData.correoElectronico}
          </p>
          <button onClick={() => setEditMode(true)} className="edit-button">
            Editar
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
