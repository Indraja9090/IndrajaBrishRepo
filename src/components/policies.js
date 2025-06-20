/**
 * 
 */
// src/components/Policies.js
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPolicies, generatePolicies } from '../redux/slices/policiesSlice';
// import { Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material';
// import { ArrowBack, ArrowForward } from '@mui/icons-material';

// const PAGE_SIZE = 10;

// const Policies = () => {
//   const dispatch = useDispatch();
//   const { data, loading } = useSelector((state) => state.policies);
//   const [page, setPage] = useState(0);

//   useEffect(() => {
//     const loadData = async () => {
//       const res = await dispatch(fetchPolicies());
//       if (res.payload.length === 0) {
//         await dispatch(generatePolicies());
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
//                 <TableCell>Policy Number</TableCell>
//                 <TableCell>Type</TableCell>
//                 <TableCell>Premium (₹)</TableCell>
//                 <TableCell>Start Date</TableCell>
//                 <TableCell>End Date</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {visibleData.map((item) => (
//                 <TableRow key={item.id}>
//                   <TableCell>{item.policyNumber}</TableCell>
//                   <TableCell>{item.type}</TableCell>
//                   <TableCell>{item.premium}</TableCell>
//                   <TableCell>{item.startDate}</TableCell>
//                   <TableCell>{item.endDate}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//           <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
//             <IconButton onClick={() => setPage((prev) => prev - 1)} disabled={!canGoBack}>
//               <ArrowBack color={canGoBack ? 'primary' : 'disabled'} />
//             </IconButton>
//             <IconButton onClick={() => setPage((prev) => prev + 1)} disabled={!canGoForward}>
//               <ArrowForward color={canGoForward ? 'primary' : 'disabled'} />
//             </IconButton>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Policies;

// src/components/Policies.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPolicies, generatePolicies } from '../redux/slices/policiesSlice';
import { Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

const PAGE_SIZE = 10;

const Policies = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { data, loading } = useSelector((state) => state.policies);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      const result = await dispatch(fetchPolicies());
      if (result.payload.length === 0) {
        await dispatch(generatePolicies());
      }
    };
    loadData();
  }, [dispatch]);

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
                <TableCell>Policy Number</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Premium (₹)</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>End Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.policyNumber}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.premium}</TableCell>
                  <TableCell>{item.startDate}</TableCell>
                  <TableCell>{item.endDate}</TableCell>
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

export default Policies;
