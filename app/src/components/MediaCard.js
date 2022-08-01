import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import LaunchIcon from "@mui/icons-material/Launch";
import Link from "@mui/material/Link";

import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

const MediaControlCard = (props) => {
	const { url, role, location, deadline, image } = props;
	const isFav = false;

	return (
		<Card sx={{ display: "flex", m: "1rem", minWidth: "300px" }}>
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
					<Typography component="div" variant="body1">
						{`${role}`}
					</Typography>
					<Typography variant="p" color="text.secondary" component="div">
						{`Location : ${location}`}
					</Typography>
					<Typography variant="p" color="text.secondary" component="div">
						{`Deadline : ${deadline}`}
					</Typography>
				</CardContent>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						p: 1,
						justifyContent: "space-between"
					}}
				>
					<Box>
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
					<Box>
						<Button
							size="small"
							variant="outlined"
							color="secondary"
							startIcon={<FavoriteBorderIcon fontSize="small" />}
						>
							Interested
						</Button>
					</Box>
				</Box>
			</Box>
		</Card>
	);
};

export default MediaControlCard;
