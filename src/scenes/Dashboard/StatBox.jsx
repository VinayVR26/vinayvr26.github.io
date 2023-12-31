import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const StatBox = ({ title,icon}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 40px 10px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;