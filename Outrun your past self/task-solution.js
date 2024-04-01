const number_lappings = (my_speed, ghost_speed, time, round_length) => {
  let counter = ((my_speed - ghost_speed) * time) / round_length;
  return my_speed > ghost_speed ? (counter | 0) - (counter % 1 ? 0 : 1) : 0;
};
