using System.Text.Json.Serialization;

namespace Web.Client.Models;

public class VersionModel
{
    [JsonPropertyName("version")]
    public string? Version { get; set; }
}