export default function handler(req, res) {
  const lineup = {
    captain: "Justin Jefferson",
    flex: ["JJ McCarthy", "D’Andre Swift", "T.J. Hockenson", "Adam Thielen", "Kyle Monangai"],
    salaryUsed: 49700,
    spiritBlessing: "Abundance, peace, renewal are yours."
  };
  res.status(200).json({ lineup });
}
