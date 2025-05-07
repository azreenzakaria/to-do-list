import { SignUpInput, SignInInput } from '../graphql/users.input';
import { SignUpResponse, SignInResponse } from '../graphql/users.response';

export interface IUserResolver {
  signUp(SignUpInput: SignUpInput): Promise<SignUpResponse>;
  signIn(signInInput: SignInInput): Promise<SignInResponse>;
}
