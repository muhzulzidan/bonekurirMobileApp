
// import React from 'react';
// import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// interface InputProps {
//     leftIcon? : any,
//     iconColor? : string
//     rightIcon? : any,
//     inputStyle : any,
//     containerStyle : any,
//     placeholderTextColor? : string,
//     handlePasswordVisibility?: any,
//     placeholder : string,
//     autoCapitalize : string,
//     keyboardType? : string,
//     textContentType : string,
//     autoFocus? : boolean,
//     value : any,
//     onChangeText : any,
//     autoCorrect? : boolean,
//     secureTextEntry?: boolean,

// }

// const InputField: React.FC<InputProps> = ({
//     secureTextEntry,
//     autoCorrect,
//     onChangeText,
//     value,
//     textContentType, 
//     autoFocus,
//     keyboardType,
//     placeholder,
//     autoCapitalize,
//     leftIcon,
//     iconColor = '#000',
//     rightIcon,
//     inputStyle,
//     containerStyle,
//     placeholderTextColor = '#444',
//     handlePasswordVisibility,
//     ...rest
// }) => {
//     return (
//         <View style={[styles.container, containerStyle]}>
//             {leftIcon ? (
//                 <MaterialCommunityIcons
//                     name={leftIcon}
//                     size={20}
//                     color={iconColor}
//                     style={styles.leftIcon}
//                 />
//             ) : null}
//             <TextInput
//                 {...rest}
//                 placeholderTextColor={placeholderTextColor}
//                 style={[styles.input, inputStyle]}
//             />
//             {rightIcon ? (
//                 <TouchableOpacity onPress={handlePasswordVisibility}>
//                     <MaterialCommunityIcons
//                         name={rightIcon}
//                         size={20}
//                         color={iconColor}
//                         style={styles.rightIcon}
//                     />
//                 </TouchableOpacity>
//             ) : null}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         borderRadius: 4,
//         flexDirection: 'row',
//         padding: 12,
//         borderWidth:1,
//     },
//     leftIcon: {
//         marginRight: 10
//     },
//     input: {
//         flex: 1,
//         width: '80%',
//         fontSize: 18,
        
//     },
//     rightIcon: {
//         alignSelf: 'center',
//         marginLeft: 10
//     }
// });

// export default InputField;
import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


interface InputProps {
    leftIcon?: any,
    iconColor? : string
    rightIcon? : any,
    inputStyle : any,
    containerStyle : any,
    placeholderTextColor? : string,
    handlePasswordVisibility?: any,
    placeholder : string,
    autoCapitalize : any,
    keyboardType? : any,
    textContentType : any,
    autoFocus? : boolean,
    value : any,
    onChangeText : any,
    autoCorrect? : boolean,
    secureTextEntry?: boolean,

}

const InputField: React.FC<InputProps> = ({
    leftIcon,
    iconColor = '#000',
    rightIcon,
    inputStyle,
    containerStyle,
    placeholderTextColor = '#444',
    handlePasswordVisibility,
    ...rest
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            {leftIcon ? (
                <MaterialCommunityIcons
                    name={leftIcon}
                    size={20}
                    color={iconColor}
                    style={styles.leftIcon}
                />
            ) : null}
            <TextInput
                {...rest}
                placeholderTextColor={placeholderTextColor}
                style={[styles.input, inputStyle]}
            />
            {rightIcon ? (
                <TouchableOpacity onPress={handlePasswordVisibility}>
                    <MaterialCommunityIcons
                        name={rightIcon}
                        size={20}
                        color={iconColor}
                        style={styles.rightIcon}
                    />
                </TouchableOpacity>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        flexDirection: 'row',
        padding: 12,
        borderWidth: 1,
    },
    leftIcon: {
        marginRight: 10
    },
    input: {
        flex: 1,
        width: '100%',
        fontSize: 18
    },
    rightIcon: {
        alignSelf: 'center',
        marginLeft: 10
    }
});

export default InputField;