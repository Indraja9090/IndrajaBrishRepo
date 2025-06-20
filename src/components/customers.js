/**
 * On Customers component mount, it tries to fetch data
 * If there's no data in db.json, it generates it using faker.
 * Paginates 10 items at a time
 * Navigation arrows are only clickable when there is more data to show
 */
// src/components/Customers.js
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCustomers, generateCustomers } from '../redux/slices/customersSlice';
// import { Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material';
// import { ArrowBack, ArrowForward } from '@mui/icons-material';

// const PAGE_SIZE = 10;

// const Customers = () => {
//   const dispatch = useDispatch();
//   const { data, loading } = useSelector((state) => state.customers);
//   const [page, setPage] = useState(0);

//   useEffect(() => {
//     const loadData = async () => {
//       const res = await dispatch(fetchCustomers());
//       if (res.payload.length === 0) {
//         await dispatch(generateCustomers());
//       }
//     };
//     loadData();
//   }, [dispatch]);

//   const startIndex = page * PAGE_SIZE;
//   const visibleData = data.slice(startIndex, startIndex + PAGE_SIZE);

//   const canGoBack = page > 0;
//   const canGoForward = startIndex + PAGE_SIZE < data.length;

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Name</TableCell>
//                 <TableCell>Email</TableCell>
//                 <TableCell>Phone</TableCell>
//                 <TableCell>City</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {visibleData.map((cust) => (
//                 <TableRow key={cust.id}>
//                   <TableCell>{cust.name}</TableCell>
//                   <TableCell>{cust.email}</TableCell>
//                   <TableCell>{cust.phone}</TableCell>
//                   <TableCell>{cust.address}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//           <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
//             <IconButton
//               onClick={() => setPage((prev) => prev - 1)}
//               disabled={!canGoBack}
//             >
//               <ArrowBack color={canGoBack ? 'primary' : 'disabled'} />
//             </IconButton>
//             <IconButton
//               onClick={() => setPage((prev) => prev + 1)}
//               disabled={!canGoForward}
//             >
//               <ArrowForward color={canGoForward ? 'primary' : 'disabled'} />
//             </IconButton>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Customers;


// src/components/Customers.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers, generateCustomers } from '../redux/slices/customersSlice';
import { Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

const PAGE_SIZE = 10;

const Customers = () => {
  const dispatch = useDispatch();
   const location = useLocation();
  const { data, loading } = useSelector((state) => state.customers);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      const result = await dispatch(fetchCustomers());
      if (result.payload.length === 0) {
        await dispatch(generateCustomers());
      }
    };
    loadData();
  }, [dispatch]);

  // Reset page when data or tab changes
  useEffect(() => {
    setPage(0);
  }, [data.length, location.pathname]);

  const paginatedData = data.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  const canGoBack = page > 0;
  const canGoForward = (page + 1) * PAGE_SIZE < data.length;

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>City</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((cust) => (
                <TableRow key={cust.id}>
                  <TableCell>{cust.name}</TableCell>
                  <TableCell>{cust.email}</TableCell>
                  <TableCell>{cust.phone}</TableCell>
                  <TableCell>{cust.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
            <IconButton onClick={() => setPage((p) => p - 1)} disabled={!canGoBack}>
              <ArrowBack color={canGoBack ? 'primary' : 'disabled'} />
            </IconButton>
            <IconButton onClick={() => setPage((p) => p + 1)} disabled={!canGoForward}>
              <ArrowForward color={canGoForward ? 'primary' : 'disabled'} />
            </IconButton>
          </div>
        </>
      )}
    </>
  );
};

export default Customers;

