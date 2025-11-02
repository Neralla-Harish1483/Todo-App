import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

export default function TodoList({ todo, fetchDetailsofCurrentTodo }) {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "48%", md: "31%", lg: "23%" }, // adjusts per screen size
        margin: "10px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        transition: "transform 0.2s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 6px 15px rgba(25,118,210,0.3)",
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            color: "text.primary",
            fontWeight: 500,
            fontSize: { xs: "1rem", sm: "1.1rem" },
            textAlign: "center",
            wordWrap: "break-word",
          }}
        >
          {todo?.todo}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "center", paddingBottom: "16px" }}>
        <Button
          onClick={() => fetchDetailsofCurrentTodo(todo?.id)}
          variant="contained"
          sx={{
            backgroundColor: "#1976d2",
            color: "white",
            textTransform: "none",
            fontWeight: 500,
            padding: "6px 18px",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
