import React, {FC} from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

interface buttonProps {
    title : string,
    onPress: any,
    containerStyle : any,
    backgroundColor : string,
    titleColor? : string,
    titleSize : number,
    width? : string,


}

const Button: FC<buttonProps> = ({
    title,
    backgroundColor = '#000',
    titleColor = '#fff',
    titleSize = 14,
    onPress,
    width = '70%',
    containerStyle
}) => {
    return (
        <Pressable
            onPress={onPress}
            style={args => {
                if (args.pressed) {
                    return [
                        styles.base,
                        {
                            opacity: 0.5,
                            backgroundColor,
                            width,
                            alignSelf: "center",

                        },
                        containerStyle
                    ];
                }

                return [
                    styles.base,
                    {
                        opacity: 1,
                        backgroundColor,
                        width,
                        alignSelf:"center",
                    },
                    containerStyle
                ];
            }}
        >
            <Text style={[styles.text, { color: titleColor, fontSize: titleSize }]}>
                {title}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    text: {
        fontWeight: '600'
    },
    base: {
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,
        paddingHorizontal: 12
    }
});

export default Button;