import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import axios from "axios";
import Button from "@mui/material/Button";
import LaunchIcon from "@mui/icons-material/Launch";
import Link from "@mui/material/Link";

import LoadingScreen from "../static/load.gif";

function MediaControlCard(props) {
	const { url, role, location, deadline, image } = props;

	return (
		<Card sx={{ display: "flex", m: "1rem", width: "500px" }}>
			<Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
				<CardMedia
					component="img"
					sx={{ width: "100px" }}
					image={image}
					alt="Live from space album cover"
				/>
			</Box>
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<CardContent sx={{ flex: "1 0 auto" }}>
					<Typography component="div" variant="h5">
						{`${role}`}
					</Typography>
					<Typography variant="body1" color="text.secondary" component="div">
						{`Location : ${location}`}
					</Typography>
					<Typography variant="body1" color="text.secondary" component="div">
						{`Deadline : ${deadline}`}
					</Typography>
				</CardContent>
				<Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
					<Button
						variant="contained"
						endIcon={<LaunchIcon fontSize="small" />}
						size="small"
					>
						<Link href={`${url}`} underline="none" sx={{ color: "#fff" }}>
							Apply Now
						</Link>
					</Button>
				</Box>
			</Box>
		</Card>
	);
}

export default function HomePage() {
	const [internships, setInternships] = useState([]);
	const [load, setLoad] = useState(true);

	useEffect(() => {
		async function run() {
			console.log("inside");
			await axios({
				request: "get",
				url: `${process.env.REACT_APP_BACKEND}/internships`,
				// url: `http://localhost:7890/internships`,
				headers: { "Access-Control-Allow-Origin": "*" }
			})
				.then((res) => {
					const { data } = res;
					setTimeout(() => {
						setInternships(data);
						setLoad(false);
						console.log("data", data);
					}, 6000);
				})
				.catch((err) => console.error(err));
		}

		run();
	}, []);

	return (
		<React.Fragment>
			<Stack
				direction="row"
				// divider={<Divider orientation="vertical" flexItem />}
				// spacing={2}
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-evenly",
					alignItems: "center"
				}}
			>
				{load == true && (
					<Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
						<CardMedia
							component="img"
							sx={{ width: "100px" }}
							image={LoadingScreen}
						/>
					</Box>
				)}
				{load == false && internships.map((item, i) => MediaControlCard(item))}
			</Stack>
		</React.Fragment>
	);
}
