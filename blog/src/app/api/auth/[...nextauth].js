import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Replace with your own logic
        const user = { id: 1, name: "John", email: "john@example.com" };
        if (credentials.username === "john" && credentials.password === "1234") {
          return user;
        }
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt", // or 'database' for DB-based sessions
  },
  pages: {
    signIn: '/login', // Custom login page (optional)
  }
});
