import blacklist from 'blacklist';
import React from 'react';

import { Input } from '../../components/input/Input';
import { Form } from '../../components/form/Form';
import { Label } from '../../components/label/Label';

import './style.scss';


export default class Registration extends React.Component {
    handleSubmit = (event, form) => {
      console.log(JSON.stringify(form, null, 2));
    };

    render() {
        return (
            <Form className="registration-form"
                  id="registration-form"
                  onSubmit={this.handleSubmit}
            >
                <h1 className="registration-form__title">Let's start!</h1>
                <div className="registration-form__field">
                    <Label className="registration-form__label"
                           htmlFor="firstname"
                           value="Firstname"
                    />
                    <Input id="firstname" name="firstname" />
                </div>
                <div className="registration-form__field">
                    <Label className="registration-form__label"
                           htmlFor="lastname"
                           value="Lastname"
                    />
                    <Input id="lastname" name="lastname" />
                </div>
                <fieldset className="registration-form__field">
                    <legend>Your gender</legend>
                    <Input id="gender-male"
                           name="gender"
                           type="radio"
                           value="male"
                    />
                    <Label className="registration-form__radio-label"
                           htmlFor="gender-male"
                           value="Male"
                    />
                    <Input id="gender-female"
                           className="registration-form__radio-label"
                           name="gender"
                           type="radio"
                           value="female"
                    />
                    <Label className="registration-form__radio-label"
                           htmlFor="gender-female"
                           value="Female"
                    />
                </fieldset>
                <div className="registration-form__field">
                    <Label className="registration-form__label"
                           htmlFor="email"
                           value="Email"
                    />
                    <Input id="email" name="email" />
                </div>
                <div className="registration-form__field">
                    <Label className="registration-form__label"
                           htmlFor="password"
                           value="Password"
                    />
                    <Input id="password"
                           name="password"
                           type="password"
                    />
                </div>
                <div className="registration-form__field">
                    <Input id="privacyPolicy"
                           name="privacyPolicy"
                           type="checkbox"
                    />
                    <Label className="registration-form__checkbox-label"
                           htmlFor="privacyPolicy"
                           value="I agree"
                    />
                </div>
                <Input name="submit"
                       type="submit"
                       value="Sign Up"
                />
            </Form>
        );
    }
}
