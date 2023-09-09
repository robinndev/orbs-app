import { Text, TouchableOpacity } from "react-native"

import { ICustomButton } from "../../../models/custonButton"
import { styles } from "./styles"


export const CustomButton = ({title, func}: ICustomButton) => {
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}