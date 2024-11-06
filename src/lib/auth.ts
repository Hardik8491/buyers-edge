// //@ts-nocheck
// import { AuthOptions } from "next-auth";
// import NextAuth from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import AzureADProvider from "next-auth/providers/azure-ad";
// import bcrypt from "bcryptjs";
// import { connect } from "@/dbConfig/dbConfig";
// import User from "@/models/userModel";
// import FacebookProvider from "next-auth/providers/facebook";
// export const authOptions: AuthOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialsProvider({
//       name: "Sign in",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "email",
//           placeholder: "hello@example.com",
//         },
//         password: { label: "Password", type: "password" },
//       },

//       async authorize(credentials: any) {
//         try {
//           if (!credentials?.email || !credentials.password) {
//             return null;
//           }
  
//           await connect();
//           const user = await User.findOne({ 
//             email: credentials?.email 
//           }).lean();
        

//           if (!user) {
//             return null;
//           }

//           const passwordsMatch = await bcrypt.compare(
//             credentials.password,
//             user.password || ""
//           );

//           console.log(passwordsMatch);
          

//           if (!passwordsMatch) {
//             return null;
//           }

//           return user;
//         } catch (error) {
//           console.log("Error: ", error);
//         }
//       },
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//     FacebookProvider({
//       clientId:  "3624695014435898" || process.env.FACEBOOK_CLIENT_ID as string,
//       clientSecret: "bd7407e6049c8b1b7d07bf65f81388db" || process.env.FACEBOOK_CLIENT_SECRET as string,
    
//     }),
//   ],
//   secret: "HARDIK8491",
//   callbacks: {
//     async signIn({ user }): Promise<boolean> {
    
//       if (user) {
        
//         return user;
//       } else {
       
//         return null;
//       }
//     },

//     session: async ({ session, token }) => {
//       // const users = await User.findOne({ email: token?.email }).lean();
// const users={
//   firstName:"hardik",
//   lastName:"bhammar"
// }
//       return {
//         ...session.accessToken = token.accessToken,
//         ...session,
//         user: {
//           ...session.user,
//           id: token?.id,
         
//           firstName: users?.firstName || "hardik", // Assuming user object from signIn
//           lastName: users?.lastName || "bhammar",
//           email: token.email,
//           randomKey: token.randomKey,
//         },
//       };
//     },
//     jwt: ({ token, user }) => {
//       if (user) {
//         const u = user as unknown as any;
//         return {
//           ...token,
//           id: u.id,
//           randomKey: u.randomKey,
//         };
//       }
//       return token;
//     },
//   },
// };
