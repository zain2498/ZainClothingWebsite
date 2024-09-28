import { Button, Grid, Typography, Link } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <Grid
        container
        className="bg-black text-white text-center mt-10"
        sx={{ bgcolor: "black", color: "white", py: 5 }}
        spacing={2}
      >
        <Grid item xs={12} sm={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" color="inherit" sx={{ fontSize: "10px" }}>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" color="inherit" sx={{ fontSize: "10px" }}>
              Blogs
            </Button>
          </div>
          <div>
            <Button className="pb-5" color="inherit" sx={{ fontSize: "10px" }}>
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" color="inherit" sx={{ fontSize: "10px" }}>
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" color="inherit" sx={{ fontSize: "10px" }}>
              Partners
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            <Button className="pb-5" color="inherit" sx={{ fontSize: "10px" }}>
              Marketing
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" color="inherit" sx={{ fontSize: "10px" }}>
              Analytics
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" color="inherit" sx={{ fontSize: "10px" }}>
              Commerce
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" color="inherit" sx={{ fontSize: "10px" }}>
              Insights
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" color="inherit" sx={{ fontSize: "10px" }}>
              Support
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            <Button className="pb-5" color="inherit" sx={{ fontSize: "10px" }}>
              API Status
            </Button>
          </div>
          <div>
            <Button className="pb-5" color="inherit" sx={{ fontSize: "10px" }}>
              Guides
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            {" "}
            <Button className="pb-5" color="inherit" sx={{ fontSize: "10px" }}>
              Claim
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" color="inherit" sx={{ fontSize: "10px" }}>
              Privacy
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" color="inherit" sx={{ fontSize: "10px" }}>
              Terms
            </Button>
          </div>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body2" align="center">
            ©️ 2023 My Company. All Rights reserved.
          </Typography>
          <Typography variant="body2" align="center">
            Made with love by me
          </Typography>
          <Typography variant="body2" align="center">
            Icons made by{" "}
            <Link
              href="https://www.freepik.com"
              color="inherit"
              underline="always"
            >
              Freepik
            </Link>{" "}
            from{" "}
            <Link
              href="https://flaticon.com/"
              color="inherit"
              underline="always"
            >
              www.Flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
