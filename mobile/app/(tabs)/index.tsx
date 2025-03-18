import {
	Image,
	StyleSheet,
	Platform,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from "react-native";

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Digite o nome do pokemon</Text>
			<View style={styles.inputContainer}>
				<TextInput style={styles.input} />
			</View>
			<TouchableOpacity>asdasd</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 50,
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#fff",
	},
	inputContainer: {
		marginTop: 20,
	},
	input: {
		backgroundColor: "#fff",
	},
});
