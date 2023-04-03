import {useEffect,useState} from "react";
import {Dimensions,View,Text,TouchableOpacity,Alert,Image } from "react-native";
import {LoginAliScreenProps} from "../navigation/ScreensNavigationRouteProps";
import Input from "../components/forms/form_elements/Input";
import Button from "../components/forms/form_elements/Button";
import {Avatar} from "react-native-paper";
const wx_logo = require('../../assets/wx_logo.png');
const alipay = require('../../assets/alipay.png')
import * as OnePass from 'rn-onepass-alibaba';



export const LoginAliScreen = ({
    navigation,
    route,
}:LoginAliScreenProps) => {
    const [isValid,setIsValid] = useState(false);
    const [phone,setPhone] = useState('');

    console.log(OnePass.RESULT_CODES)
    useEffect(() => {
        setIsValid(true);
        const asyncRun = async() => {
            //const retn = await onePassSDK.getOperatorType()
            //setPhone(retn);
        }
        asyncRun();
    }, []);

    const onPress = () => {
        console.log('hello');
        
    }

    return (
        <View className="h-full w-full justify-center items-center">
            <Image  className="w-72 h-72" 
                source={require("../../assets/adaptive-icon.png")}
            />
            <View className="my-5 px-6 w-full ">
                <Text className="mt-4 text-base">请输入手机号</Text>
                <Input
                    placeholder="13916396951"
                    error={isValid?'':'号码错'}
                ></Input>
                <Button
                    isValid = {isValid}
                    title ={'登 录'}
                    onPress={onPress}
                />

            </View>
            
        </View>
    )
}

 