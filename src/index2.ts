// TYPE INFERENCE IN ZOD
// you can extract the TypeScript of any schema with z.infer<typeof mySchema>

import { TypeOf, z } from 'zod';
import express from 'express';

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
    name: z.string().min(1, {message: "Name cannot be empty"}),
    email: z.string().email({message: "Invalid Email format"}),
    age: z.number().min(18, {message: "You must be atleast 18 years old"}).optional()
});

type FinalUserSchema = z.infer<typeof userProfileSchema>;

app.put("/user", function(req, res) {
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody: FinalUserSchema = req.body; // how to assign a type to updateBody, thats how.

    if(!success) {
        res.status(411).json({});
        return;
    }

    // update database here
    res.json({
        message: "User Updated"
    })
})