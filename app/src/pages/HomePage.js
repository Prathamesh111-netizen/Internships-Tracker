import * as React from "react";
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

function MediaControlCard() {
	return (
		<Card sx={{ display: "flex", m: "1rem", width: "40%" }}>
			<Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
				<CardMedia
					component="img"
					sx={{ width: "100px" }}
					// image="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg" // google
					// image="https://pbs.twimg.com/profile_images/1493955414039441408/3e-HhWSW_400x400.jpg" // ibm
					// image="https://pbs.twimg.com/profile_images/1268196215587397634/sgD5ZWuO_400x400.png" // microsoft
					// image="https://pbs.twimg.com/profile_images/1400483947319115776/bTfxhuOK_400x400.jpg" // amazon
					alt="Live from space album cover"
				/>
			</Box>
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<CardContent sx={{ flex: "1 0 auto" }}>
					<Typography component="div" variant="h5">
						Role Name
					</Typography>
					<Typography variant="body1" color="text.secondary" component="div">
						Location
					</Typography>
					<Typography variant="body1" color="text.secondary" component="div">
						Deadline
					</Typography>
				</CardContent>
				<Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
					<Button
						variant="contained"
						endIcon={<LaunchIcon fontSize="small" />}
						size="small"
					>
						<Link href="#" underline="none" sx={{ color: "#fff" }}>
							Apply Now
						</Link>
					</Button>
				</Box>
			</Box>
		</Card>
	);
}

export default function HomePage() {
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
				<MediaControlCard />
				<MediaControlCard />
				<MediaControlCard />
				<MediaControlCard />
				<MediaControlCard />
				<MediaControlCard />
			</Stack>
		</React.Fragment>
	);
}
