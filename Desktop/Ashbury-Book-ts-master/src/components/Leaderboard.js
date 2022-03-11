import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { auto } from "@popperjs/core";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


function createData({position, name, score, games}) {
    return { position, name, score, games };
  }
  const rows = [
    createData(1, 'Alec', 2, 3),
    createData(2, 'Samer', 1, 3),
    createData(3, "Michael", -100, 3),
  ];
  
  const Leaderboard = () => {
    return (
      <TableContainer component={Paper} sx={{ width:700}} style={{margin:auto}}>
        <Table sx={{ minWidth: 650}} aria-label="simple table">
          <TableHead>
            <StyledTableRow>
                <StyledTableCell align="left"><b>Position</b></StyledTableCell>
                <StyledTableCell align="left"><b>Player</b></StyledTableCell>
                <StyledTableCell align="left"><b>Score</b></StyledTableCell>
                <StyledTableCell align="left"><b>Games Played</b></StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.position}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.score}</TableCell>
                <TableCell align="left">{row.games}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

export default Leaderboard;