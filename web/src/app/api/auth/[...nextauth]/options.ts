import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
// import { NextAuthOptions } from 'next-auth';
// import { Profile, Session } from 'next-auth';
// import Provider from 'next-auth';
// import { Account , User} from "next-auth"

export const options= {
    providers: [
        GithubProvider({
            clientId: process.env.AUTH_GITHUB_ID as string,
            clientSecret: process.env.AUTH_GITHUB_SECRET as string,
            // profile(profile) {
            //     console.log("GithubProfile", profile)

            //     let userRole = "GitHub User";

            //     if(profile?.email == 'irochibuzor@gmail.com'){
            //         userRole = "admin"
            //     }

            //     return {
            //         ...profile,
            //         role: userRole
            //     }
            // }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            // profile(profile) {
            //     console.log("Profile Google:", profile)

            //     let userRole = "Google User";

            //     if(profile?.email == 'irochibuzor@gmail.com'){
            //         userRole = "admin"
            //     }

            //     return {
            //         ...profile,
            //         role: userRole,
              //          id: profile.sub,
            //     }
            // }
          })
    ],
    // callbacks: {
    //     async jwt({token, user}) { 
    //         if(user) token.role = user.role
    //         return token
    //     }

    //     async session({session, token}){
    //         if(session?.user) session.user.role = token.role
    //         return session
    //     }
    // }
};




// import { NextApiRequest, NextApiResponse } from 'next';
// import GithubProvider from 'next-auth/providers/github';
// import GoogleProvider from 'next-auth/providers/google';

// const options: NextAuthOptions = {
//     providers: [
//         GithubProvider({
//             clientId: process.env.AUTH_GITHUB_ID as string,
//             clientSecret: process.env.AUTH_GITHUB_SECRET as string,
//             profile(profile: Profile, tokens: any) {
//                 console.log(profile);

//                 let userRole = 'GitHub User';

//                 if (profile?.email === 'irochibuzor@gmail.com') {
//                     userRole = 'admin';
//                 }

//                 return {
//                     ...profile,
//                     role: userRole,
//                 };
//             },
//         }) as unknown as Provider<Profile, Account, Session, any>,
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID as string,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//         }) as unknown as Provider<Profile, Account, Session, any>,
//     ],
// };

// export default options;
