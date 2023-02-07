import mongoose from "mongoose";

const CardSchema = mongoose.Schema({
  name: String,
  imgUrl: String,
});

// Syntax :  mongoose.model('collection_Name' , Schema);
export default mongoose.model("Cards", CardSchema); // This is where we define collection database ( like tables in SQL )
// where colection is array of documents
// colletion > [documents] > colletion > [documents] > colletion > [documents]
