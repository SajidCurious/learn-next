export default function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    res.status(200).json(["kkkkkkkkkk"]);
  } else {
    // Handle any other HTTP method
    res.status(200).json(["jjjjjjjj"]);
  }
}
