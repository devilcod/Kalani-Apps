import React from 'react'
import { SigninContainer, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninELements'
const Signin = () => {
    return (
        <>
            <SigninContainer>
                <FormWrap>
                    <Icon to="/">Kalani.</Icon>
                    <FormContent>
                        <Form>
                            <FormH1>Sign In to Your Account</FormH1>    
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='Email' required />
                            <FormLabel htmlFor='for' >Password</FormLabel>
                            <FormInput type='password' required/>
                            <FormButton type='submit' >Continue</FormButton>
                            <Text>Forget Password</Text>
                        </Form>    
                    </FormContent>    
                </FormWrap>    
            </SigninContainer>   
        </>
    )
}

export default Signin
