namespace Boids.Models.Config;

public class ConfigWindow
{
    public int Width { get; set; }
    public int Height { get; set; }
    public bool Fullscreen { get; set; }
    public required string BackgroundColor { get; set; }
}