import { useReducer } from "react";
import { createBoard, boardReducer } from "../utils/boardReducer";
import { Box } from "@mui/material";
import { Cell } from "./Cell";

export function Board(){
    const [board, dispatch] = useReducer(boardReducer, createBoard());

    return (
        <Box sx={{display: "flex", flexDirection: "column", color: "white", gap: "4px"}}>
            {
                board.map((row, rowIndex) => (
                    <Box sx={{display: "flex", flexDirection: "row", gap: "4px"}}>
                        { row.map((col, colIndex) => (
                            <Cell onClick={() => dispatch({type: "CELL_CLICK", x: colIndex, y: rowIndex})} key={'cell-' + colIndex + '-' + rowIndex + '-' + col.value }>
                                {col.value || ""}
                            </Cell>
                        ))}
                    </Box>
                ))
            }
        </Box>
    )
}