import React, { useState } from "react";
import Montante from "../assets/Flechemontante.png";
import Descendante from "../assets/Flechedescendante.png";

function Dropdown() {
  const [isOpen, setIsOpen] = useState([]);
  const menus = [
    {
      id: 1,
      title: "Fiabilité",
      text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      id: 2,
      title: "Respect",
      text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      id: 3,
      title: "Service",
      text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      id: 4,
      title: "Sécurité",
      text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  const handleToggle = (menuId) => {
    setIsOpen((prevOpen) => {
      const updatedOpen = [...prevOpen];
      const menuIndex = updatedOpen.indexOf(menuId);

      if (menuIndex > -1) {
        updatedOpen.splice(menuIndex, 1);
      } else {
        updatedOpen.push(menuId);
      }

      return updatedOpen;
    });
  };

  return (
    <div className="Dropdown">
      {menus.map((menu) => (
        <div key={menu.id} className="DropdownMenu">
          <span className="DropdownTitle">{menu.title}</span>
          <button
            onClick={() => handleToggle(menu.id)}
            className="buttonDropdown"
          >
            {isOpen.includes(menu.id) ? (
              <span>&#9650;</span>
            ) : (
              <span>&#9660;</span>
            )}
          </button>
          {isOpen.includes(menu.id) && (
            <div className="DropdownText">
              <p>{menu.text}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Dropdown;
