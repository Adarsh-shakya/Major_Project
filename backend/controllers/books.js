import BookModel from '../models/books.js';


export const postbook = async (req, res) => {
    try {
        //const { id: _id } = req.params; 
        const { img, link,name } = req.body;  
    
        // Validate incoming data (consider adding validation rules for img and link)
        if (!img  || !name) {
          return res.status(400).json({ error: 'Missing required data: img or link' });
        }
    
        // Update the book using findOneAndUpdate with $push operator
        const updatedBook = await BookModel.findOneAndUpdate(
          { name },
          { $push: { Books: { img, link } } }, // Add new book object to Books array
          { new: true } // Return the updated document
        );
    
        if (!updatedBook) {
          return res.status(404).json({ error: 'Book not found' });
        }
    
        res.status(200).json({ message: 'Book updated successfully!', book: updatedBook });
      } catch (error) {
        console.error('Error updating book:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
};


export const getbook = async(req, res)=>{
    try {
        const books = await BookModel.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}