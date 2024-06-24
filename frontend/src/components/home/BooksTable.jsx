import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import { BsInfoCircle } from 'react-icons/bs';

const BooksTable = ({ books }) => {
    return (
        <table className='w-full border-seperate border-spacing-2'>
            <thead>
                <tr>
                    <th className='border border-slate-600  bg-blue-400'>
                        No. 
                    </th>
                    <th className='border border-slate-600 bg-blue-400 '>
                        Title
                    </th>
                    <th className='border border-slate-600 bg-blue-400 max-md:hidden'>
                        Author
                    </th>
                    <th className='border border-slate-600 bg-blue-400'>
                        Publish Year
                    </th>
                    <th className='border border-slate-600 bg-blue-400'>
                        Operations
                    </th>
                </tr>
            </thead>
            <tbody>
                {books.map((book, index) => (
                    <tr key={book._id} className='h-8'>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {index + 1}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {book.title}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                            {book.author}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {book.publishYear}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            <div className='flex justify-center gap-x-4' >
                                <Link to={`/books/details/${book._id}`}>
                                    <BsInfoCircle className='text-2xl text-maroon-700' />
                                </Link>
                                <Link to={`/books/edit/${book._id}`}>
                                    <AiOutlineEdit className='text-2xl text-yellow-700' />
                                </Link>
                                <Link to={`/books/delete/${book._id}`}>
                                    <MdOutlineDelete className='text-2xl text-red-600' />
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>


        </table>
    )
}

export default BooksTable