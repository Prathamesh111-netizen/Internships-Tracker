import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";

import Stack from "@mui/material/Stack";
import axios from "axios";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MediaCard from "../components/MediaCard";
import LoadingScreen from "../static/load.gif";
import BackgroundLetterAvatars from "../components/BackgroundLetterAvatars";

function LinkTab(props) {
	return (
		<Tab
			component="a"
			onClick={(event) => {
				event.preventDefault();
			}}
			{...props}
		/>
	);
}

function ColorTabs() {
	return (
		<Box
			sx={{
				width: "98vw",
				backgroundColor: "#F5F5F5",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				p: 0.5,
				mx: 1
			}}
		>
			<Tabs textColor="secondary" indicatorColor="secondary">
				<Tabs>
					<LinkTab label="All" href="/" />
					<LinkTab label="Favourites" href="/favourites" />
				</Tabs>
			</Tabs>
			<BackgroundLetterAvatars name="Prathamesh Pawar" />
		</Box>
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
				// url: `${process.env.REACT_APP_BACKEND}/internships`,
				url: `http://localhost:7890/internships`,
				headers: { "Access-Control-Allow-Origin": "*" }
			})
				.then((res) => {
					const { data } = res;
					setTimeout(() => {
						setInternships(data);
						setLoad(false);
						console.log("data", data);
					}, 3000);
				})
				.catch((err) => console.error(err));
		}

		run();
	}, []);

	return (
		<React.Fragment>
			{load == true ? (
				<Box
					sx={{
						height: "95vh",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-evenly"
					}}
				>
					<CardMedia
						component="img"
						sx={{ width: "100px" }}
						image={LoadingScreen}
					/>
				</Box>
			) : (
				<>
					<ColorTabs />
					<Stack
						direction="row"
						sx={{
							height: "100%",
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "space-evenly",
							alignItems: "center"
						}}
					>
						{internships.map((item, i) => MediaCard(item))}
					</Stack>
				</>
			)}
		</React.Fragment>
	);
}
