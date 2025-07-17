import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    const { type, location, notes } = body;

    // Basic validation
    if (!type || !location) {
      return Response.json({
        success: false,
        error: true,
        message: "Type and location are required fields.",
        result: null,
      }, { status: 400 });
    }
    const client = await clientPromise;
    const db = client.db("psers_db"); // 💾 Change to your desired DB name
    const collection = db.collection("emergency_reports");

    // Optional: Prevent duplicate reports (e.g. same type & location & notes)
    const isDuplicate = await collection.findOne({ type, location, notes });
    if (isDuplicate) {
      return Response.json({
        success: false,
        error: true,
        message: "This emergency report already exists.",
        result: null,
      }, { status: 409 });
    }

    const result = await collection.insertOne({
      type,
      location,
      notes,
      timestamp: new Date(), // 🕒 Add a timestamp
    });

    return Response.json({
      success: true,
      error: false,
      message: "Emergency report submitted successfully.",
      result: result,
    }, { status: 201 });

  } catch (error) {
    console.error("❌ Error submitting report:", error);
    return Response.json({
      success: false,
      error: true,
      message: "Internal Server Error",
      result: null,
    }, { status: 500 });
  }
}
