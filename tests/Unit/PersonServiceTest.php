<?php

use App\DTO\PersonDTO;
use App\Enums\PersonTypeEnum;
use App\Repositories\Interfaces\PersonRepositoryInterface;
use App\Services\Interfaces\FileUploadServiceInterface;
use App\Services\PersonService;
use Faker\Factory as FakerFactory;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\UploadedFile;

beforeEach(function () {
    $this->faker = FakerFactory::create();
    $this->personRepositoryMock = Mockery::mock(PersonRepositoryInterface::class);
    $this->fileUploadServiceMock = Mockery::mock(FileUploadServiceInterface::class);
    $this->personService = new PersonService(
        $this->personRepositoryMock,
        $this->fileUploadServiceMock
    );

    $this->makePersonDTO = function (): PersonDTO {
        return new PersonDTO(
            name: $this->faker->name(),
            aka: $this->faker->userName(),
            bio: $this->faker->text(100),
            DOB: DateTimeImmutable::createFromFormat('Y-m-d', $this->faker->date('Y-m-d')),
            img: UploadedFile::fake()->image('photo.jpg'),
            type: PersonTypeEnum::random()
        );
    };

    $this->makePersonDTOs = function (int $count): array {
        return array_map(fn () => ($this->makePersonDTO)(), range(1, $count));
    };
});

test('Method getAll exists', function () {
    expect(method_exists($this->personService, 'getAll'))->toBeTrue();
});

test('PersonService return correct collection', function () {
    $expectedCollection = new Collection(($this->makePersonDTOs)(3));
    $wrongCollection = new Collection(($this->makePersonDTOs)(3));

    $this->personRepositoryMock
        ->shouldReceive('get')
        ->once()
        ->with([], ['created_at' => 'desc'])
        ->andReturn($expectedCollection);

    $result = $this->personService->getAll();

    expect($result)->toBeInstanceOf(Collection::class);
    expect($result)->toBe($expectedCollection);
    expect($result)->not->toBe($wrongCollection);
});
