import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClaims, generateClaims } from '../redux/slices/claimsSlice';
import { Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const PAGE_SIZE = 10;

const Claims = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.claims);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      const res = await dispatch(fetchClaims());
      if (res.payload.length === 0) {
        await dispatch(generateClaims());
      }
    };
    loadData();
  }, [dispatch]);

  const startIndex = page * PAGE_SIZE;
  const visibleData = data.slice(startIndex, startIndex + PAGE_SIZE);

  const canGoBack = page > 0;
  const canGoForward = startIndex + PAGE_SIZE < data.length;

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Claim Number</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Filed On</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.claimNumber}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>{item.filedOn}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
            <IconButton onClick={() => setPage((prev) => prev - 1)} disabled={!canGoBack}>
              <ArrowBack color={canGoBack ? 'primary' : 'disabled'} />
            </IconButton>
            <IconButton onClick={() => setPage((prev) => prev + 1)} disabled={!canGoForward}>
              <ArrowForward color={canGoForward ? 'primary' : 'disabled'} />
            </IconButton>
          </div>
        </>
      )}
    </div>
  );
};

export default Claims;
