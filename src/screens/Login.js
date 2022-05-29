// import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native'
// import React from 'react'
// import { AntDesign } from '@expo/vector-icons'; 

// export default function Login({navigation}) {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     const onLoginPressed = () => {
//         const emailError = emailValidator(email.value)
//         const passwordError = passwordValidator(password.value)
//         if (emailError || passwordError) {
//           setEmail({ ...email, error: emailError })
//           setPassword({ ...password, error: passwordError })
//           return
//         }
//         navigation.reset({
//           index: 0,
//           routes: [{ name: 'Dashboard' }],
//         })
//       }
//     return (
//         <SafeAreaView style={{flex: 1, paddingHorizontal: 30}}>
//             <AntDesign name="arrowleft" size={24} color="black" />
//             <Text style={{fontSize: 36, fontWeight: '700'}}>Login to your Account</Text>
//             {/* Image require asset */}
//             <Image source={require('../../assets/images/vector.png')} />
//             <TextInput
//                 label="Email"
//                 returnKeyType="next"
//                 value={email.value}
//                 onChangeText={(text) => setEmail({ value: text, error: '' })}
//                 error={!!email.error}
//                 errorText={email.error}
//                 autoCapitalize="none"
//                 autoCompleteType="email"
//                 textContentType="emailAddress"
//                 keyboardType="email-address"
//             />
//             <TextInput
//                 label="Password"
//                 returnKeyType="done"
//                 value={password.value}
//                 onChangeText={(text) => setPassword({ value: text, error: '' })}
//                 error={!!password.error}
//                 errorText={password.error}
//                 secureTextEntry
//             />
//             <View>
//                 <CheckBox />
//                 <Text>Remember me</Text>
//             </View>
//             <TouchableView mode="contained" onPress={onLoginPressed} style={{}}>
//                 Login
//             </TouchableView>
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({

// })