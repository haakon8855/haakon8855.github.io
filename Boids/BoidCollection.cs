using Boids.Models.Config;

namespace Boids;

public class BoidCollection
{
    private readonly Config _config;
    private Boid[] Boids { get; }

    public double[][] Positions => Boids.Select(b => b.Position).ToArray();
    public double[][] Headings => Boids.Select(b => b.Heading).ToArray();

    public BoidCollection(Config config)
    {
        _config = config;
        Boids = new Boid[_config.Boids.NumberOfBoids];
        var rand = new Random();

        for (var i = 0; i < _config.Boids.NumberOfBoids; i++)
        {
            Boids[i] = new Boid(
                rand.Next(_config.Window.Width),
                rand.Next(_config.Window.Height),
                _config
            );
        }
    }

    public void Move()
    {
        var viewDist = _config.Boids.ViewDist;
        List<double[]> positions = [];
        List<double[]> headings = [];
        foreach (var boid in Boids)
        {
            positions.Add(boid.Position);
            headings.Add(boid.Heading);
        }

        foreach (var boid in Boids)
        {
            List<double[]> visiblePositions = [];
            List<double[]> visibleHeadings = [];
            for (var j = 0; j < Boids.Length; j++)
            {
                if (boid.DistanceTo(Boids[j]) < viewDist)
                {
                    visiblePositions.Add(positions[j]);
                    visibleHeadings.Add(headings[j]);
                }
            }

            boid.Move(visiblePositions, visibleHeadings);
        }
    }
}