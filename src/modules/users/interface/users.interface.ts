import { LogInInput, SignInInput } from '../graphql/users.input';
import { LogInResponse, SignInResponse } from '../graphql/users.response';

export interface IUserResolver {
  logIn(logInInput: LogInInput): Promise<LogInResponse>;
  signIn(signInInput: SignInInput): Promise<SignInResponse>;
}
