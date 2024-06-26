/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Presentation page components
import ExampleCard from "pages/Reportes/components/ExampleCard";

// Data
import data from "pages/Reportes/sections/data/designBlocksData";
import "./BotonCargarInforme.css";

import { useNavigate } from "react-router-dom";

function DesignBlocks() {
  const navigate = useNavigate();

  const handleCargarInforme = () => {
    const urlInforme = "/cargar-informe";
    navigate(urlInforme);
  };

  const renderData = data.map(({ title, description, items }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={title}>
      <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {description}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {items.map(({ image, name, count, route, pro }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
              <Link to={pro ? "/" : route}>
                <ExampleCard image={image} name={name} count={count} pro={pro} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={6} py={6}>
      <Container style={{ textAlign: "center", marginTop: 10, marginBottom: 100 }}>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKTypography variant="h2" fontWeight="bold">
            Gran coleccion de informes clinicos
          </MKTypography>
          <MKTypography variant="body1" color="text">
            Esta seccion podremos visualizar y consultar multiples PDF´S acerca de informes clinico
            s y poder obtener informacion relevante de cada uno de los documentos.
          </MKTypography>
        </Grid>
        <button
          className="boton-cargar-informe"
          onClick={handleCargarInforme}
          style={{ textAlign: "center", justifyContent: "center" }}
        >
          Cargar informe clínico
        </button>
      </Container>

      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
