import React from "react";
import "antd/dist/antd.css";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const StreamTabs = props => {
	return (
		<div style={{ width: "85%", margin: "0 auto" }}>
			<Tabs
				defaultActiveKey="1"
				tabBarStyle={{ backgroundColor: "black", color: "#8545e1" }}
				style={{
					backgroundColor: "#18181b",
					borderRadius: "10px",
					boxShadow: "0 0 10px black"
				}}
				tabBarGutter={100}
			>
				<TabPane tab="Twitch" key="1">
					{props.twitch && props.twitch.streams.length > 0 ? (
						<div>
							{props.twitch.streams.map((stream, i) => (
								<div style={{ display: "inline-block" }} key={i}>
									<a href={stream.external_link} target="_blank">
										<img
											className="stream-box-blue"
											src={stream.thumbnail_url
												.replace("{height}", 248)
												.replace("{width}", 440)}
											alt="stream thumbnail"
										/>
										<div
											style={{
												width: "350px",
												height: "50px",
												textDecorations: "none",
												overflowX: "hidden",
												color: "white"
											}}
										>
											{" "}
											{stream.title} by {stream.user_name}{" "}
										</div>
									</a>
								</div>
							))}
						</div>
					) : (
						<div style={{ display: "flex", justifyContent: "center" }}>
							{" "}
							<p style={{ fontSize: "50px", color: "white" }}>
								{" "}
								No Streams Found{" "}
							</p>{" "}
						</div>
					)}
				</TabPane>
				<TabPane tab="Mixer" key="2">
					{props.mixer && props.mixer.streams.length > 0 ? (
						<div>
							{props.mixer.streams.map((stream, i) => (
								<div style={{ display: "inline-block" }} key={i}>
									<a href={stream.external_link} target="_blank">
										<img
											className="stream-box-blue"
											src={stream.thumbnail_url
												.replace("{height}", 248)
												.replace("{width}", 440)}
											alt="stream thumbnail"
										/>
										<div
											style={{
												width: "350px",
												height: "50px",
												textDecorations: "none",
												overflowX: "hidden",
												color: "white"
											}}
										>
											{" "}
											{stream.title} by {stream.user_name}{" "}
										</div>
									</a>
								</div>
							))}
						</div>
					) : (
						<div style={{ display: "flex", justifyContent: "center" }}>
							{" "}
							<p style={{ fontSize: "50px", color: "white" }}>
								{" "}
								No Streams Found{" "}
							</p>{" "}
						</div>
					)}
				</TabPane>
				<TabPane tab="Youtube" key="3">
					{props.youtube && props.youtube.streams.length > 0 ? (
						<div>
							{props.youtube.streams.map((stream, i) => (
								<div style={{ display: "inline-block" }} key={i}>
									<a href={stream.external_link} target="_blank">
										<img
											className="stream-box-blue"
											src={stream.thumbnail_url
												.replace("{height}", 248)
												.replace("{width}", 440)}
											alt="stream thumbnail"
										/>
										<div
											style={{
												width: "350px",
												height: "50px",
												textDecorations: "none",
												overflowX: "hidden",
												color: "white"
											}}
										>
											{" "}
											{stream.title} by {stream.user_name}{" "}
										</div>
									</a>
								</div>
							))}
						</div>
					) : (
						<div style={{ display: "flex", justifyContent: "center" }}>
							{" "}
							<p style={{ fontSize: "50px", color: "white" }}>
								{" "}
								No Streams Found{" "}
							</p>{" "}
						</div>
					)}
				</TabPane>
			</Tabs>
		</div>
	);
};

export default StreamTabs;
