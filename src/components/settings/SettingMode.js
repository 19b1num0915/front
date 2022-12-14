// @mui
import {
  Box,
  Grid,
  Radio,
  Paper,
  RadioGroup,
  CardActionArea,
  FormControlLabel,
} from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Iconify from '../Iconify';

// ----------------------------------------------------------------------

export default function SettingMode() {
  const { themeMode, onChangeMode, onToggleMode } = useSettings();

  return (
      <RadioGroup name="themeMode" value={themeMode} onChange={onChangeMode}>
        <Grid dir="ltr" container spacing={2.5}>
          {['light', 'dark'].map((mode, index) => (
            <Grid key={mode} item xs={6}>
              <Paper
                onClick={onToggleMode}
                variant="outlined"
                sx={{
                  width: 1,
                  zIndex: 0,
                  borderRadius: 1.25,
                  overflow: 'hidden',
                  position: 'relative',
                  bgcolor: mode === 'dark' ? 'grey.800' : 'common.white',
                  ...(themeMode === mode && {
                    boxShadow: (theme) => theme.customShadows.z12,
                  }),
                }}
              >
                <CardActionArea sx={{ color: 'primary.main' }}>
                  <Box
                    sx={{
                      py: 4,
                      display: 'flex',
                      color: 'text.disabled',
                      justifyContent: 'center',
                      ...(themeMode === mode && {
                        color: 'primary.main',
                      }),
                    }}
                  >
                    <Iconify
                      icon={index === 0 ? 'eva:sun-fill' : 'eva:moon-fill'}
                      width={24}
                      height={24}
                    />
                  </Box>

                  <FormControlLabel
                    label=""
                    value={mode}
                    control={<Radio sx={{ display: 'none' }} />}
                    sx={{
                      m: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      position: 'absolute',
                    }}
                  />
                </CardActionArea>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
  );
}
