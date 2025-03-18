import React from "react";
import { api } from "@/server/api";
import { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StatusBar,
	Alert,
	SafeAreaView,
	ScrollView,
} from "react-native";
import { Pokemon } from "@/types/pokemon";

export default function Index() {
	// DATA
	const [pokemon, setPokemon] = useState<string>("")
	const [pokemonData, setPokemonData] = useState<Pokemon | null>(null)

	function handlePokemonChange(text: string) {
		setPokemon(text.toLowerCase())
	}

	async function handleSearch(){
		try {
			const response = await api.get(`/api/pokemons/${pokemon}`)
			if(response.status === 200){
				setPokemonData(response.data)
			}
		} catch (err) {
			Alert.alert("Erro", "Não foi possível encontrar o pokemon");
			setPokemonData(null)
		}
	}
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar
				barStyle="light-content"
				backgroundColor="#09090B"
				translucent={false}
			/>
			<ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
				<View>
					<Text style={styles.title}>Digite o nome do pokemon</Text>
					<TextInput 
						style={styles.input} 
						value={pokemon} 
						onChangeText={handlePokemonChange}
						placeholder="Ex: pikachu"
						placeholderTextColor="#666"
						autoCapitalize="none"
						autoCorrect={false}
					/>
					<TouchableOpacity style={styles.button} onPress={handleSearch}>
						<Text style={styles.buttonText}>Pesquisar</Text>
					</TouchableOpacity>
				</View>

				{pokemonData && pokemonData.length > 0 && (
					<View style={styles.pokemonInfo}>
						<Text style={styles.sectionTitle}>Habilidades:</Text>
						{pokemonData.map((ability, index) => (
							<Text key={index} style={styles.abilityText}>
								{ability}
							</Text>
						))}
					</View>
				)}
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#09090B",
	},
	content: {
		flex: 1,
	},
	contentContainer: {
		padding: 20,
		gap: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#fff",
	},
	input: {
		backgroundColor: "#fff",
		padding: 10,
		borderRadius: 10,
		marginTop: 20,
		fontSize: 20,
		height: 50,
	},
	button:{
		backgroundColor: "red",
		padding: 10,
		borderRadius: 10,
		marginTop: 20,
	},
	buttonText:{
		color: "#fff",
		fontWeight: "bold",
		fontSize: 25,
		textAlign: "center",
	},
	pokemonInfo: {
		backgroundColor: "#18181b",
		padding: 20,
		borderRadius: 10,
		marginTop: 20,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#fff",
		marginBottom: 10,
	},
	abilityText: {
		fontSize: 20,
		color: "#fff",
		marginBottom: 10,
	},
});
