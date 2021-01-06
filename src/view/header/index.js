import React from "react";
import { MenuList, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  FaCar,
  FaUsers,
  FaLaptop,
  FaCreditCard,
  FaWhatsapp,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Header() {
  return (
    <>
      {window.innerWidth < 577 ? (
        <div></div>
      ) : (
        <nav class="header navbar navbar-expand-lg navbar-light bg-white p-0">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="/logo.png" alt="carcrm" height="40" />
            </Link>

            <ul class="navbar-nav">
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/veiculos"
                >
                  <FaCar className="icon-lg mr-2" />
                  Veiculos
                </Link>
              </li>
              <li class="nav-item">
                <button className="nav-link bg-white" href="#">
                  <FaUsers className="icon-lg mr-2" />
                  Proprietários
                </button>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  data-toggle="dropdown"
                >
                  <FaLaptop className="icon-lg mr-2" />
                  Site
                </Link>
                <MenuList className="dropdown-menu">
                  <MenuItem className="dropdown-item">
                    Otimização para o Google
                  </MenuItem>
                  <MenuItem className="dropdown-item">
                    Unidades e telefones
                  </MenuItem>
                  <MenuItem className="dropdown-item">Minha Logo</MenuItem>
                  <MenuItem className="dropdown-item">Dominio</MenuItem>
                  <MenuItem className="dropdown-item">Configurações</MenuItem>
                </MenuList>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  data-toggle="dropdown"
                >
                  <FaCreditCard className="icon-lg mr-2" />
                  Financeiro
                </Link>
                <MenuList className="dropdown-menu">
                  <MenuItem className="dropdown-item">Meu Plano</MenuItem>
                  <MenuItem className="dropdown-item">
                    Minha Transações
                  </MenuItem>
                </MenuList>
              </li>

              <li class="nav-item">
                <Link className="nav-link bg-white" to="#">
                  <FaWhatsapp className="icon-lg mr-2" />
                  Ajuda
                </Link>
              </li>

              <li class="nav-item">
                <Link className="nav-link bg-white" to="#">
                  <FaSignOutAlt className="icon-lg mr-2" />
                  Sair
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}
